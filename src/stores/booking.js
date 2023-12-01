import { useRoute,useRouter } from 'vue-router'
import { defineStore } from "pinia";
//import data from '../../userinfo.json'
const axios = require('axios');
const route = useRoute()
const router = useRouter()

export const usebooking = defineStore('booking',{
    state: () => ({
        isAuth: false,
        isfirst: false,
        users: [],
        searchvalobj: { 
            destination: null,
            checkindate: null,
            checkoutdate: null,
            guests: null,
            rooms: null
        },
        hotels: [],
        searchresultnum: 0
    }),
    actions: {
        async getusers(){
            const res = await fetch('http://localhost:3000/users')
            const data = await res.json()
            this.users = data
        },
        async register(newuser){
            //check if user exist alreadt
            await this.getusers()
            for (let i = 0; i < this.users.length; i++) {
                if(newuser.email==this.users[i].email){
                    console.log("exist")
                    return 0
                }
            }
            const res = await fetch('http://localhost:3000/users',{
                method: 'POST',
                body: JSON.stringify(newuser),
                headers: {'Content-Type' : 'application/json'}
            })
            return 1
        },
        async login(email,pass){
            await this.getusers()
            for (let i = 0; i < this.users.length; i++) {
                if(email==this.users[i].email && pass==this.users[i].password){
                    if(this.users[i].count==0){
                        //first time
                        this.users[i].count++
                        this.isfirst = true
                    }
                    this.isAuth = true
                    localStorage.setItem('isAuth', this.isAuth)
                    return 1
                }
            }
            return 0
        },
        logout(){
            this.isfirst = false
            this.isAuth = false
            localStorage.removeItem('isAuth')
            this.searchvalobj.destination=null
            this.searchvalobj.checkindate=null
            this.searchvalobj.checkoutdate=null
            this.searchvalobj.guests=null
            this.searchvalobj.rooms=null
        },
        setsearchval(dest,checkin,checkout,guests,rooms){
            this.searchvalobj.destination=dest
            this.searchvalobj.checkindate=checkin
            this.searchvalobj.checkoutdate=checkout
            this.searchvalobj.guests=guests
            this.searchvalobj.rooms=rooms
        },
        async getdestinations(options){
            try {
                const response = await axios.request(options);
                return response.data.data
            } catch (error) {
                console.error(error);
            }
        }
        ,
        async searchhotels(options){
            //authorization
            if(this.isAuth==false){
                console.log('not auth')
                router.push({
                    name: "login"
                })
                return 0
            }
            if(route.name=='home'){
                console.log('home')
                router.push({
                    name: "resultpage"
                })
            }
            try {
                const response = await axios.request(options);
                console.log("here")
                this.searchresultnum = parseInt(response.data.data.meta[0].title)
                this.hotels = response.data.data.hotels
            } catch (error) {
                console.error(error);
            }
        },
        async getsortcategories(options){
            try {
                const response = await axios.request(options);
                return response.data.data
            } catch (error) {
                console.error(error);
            }
        }
    }
})