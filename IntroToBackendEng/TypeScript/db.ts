//ek in memory db

type UserID = string

interface User {
    id: string
    fname : string
    lname ?: string | undefined
    email : string
    contact: {
        mobile: string
    }
    address: {
        street : number
        pincode : number
        country : string
    }
}

class InMemoryDb{
    private _db:Map<User['id'], User>

    constructor(){

    }

    public  insertUser(data:User):UserID{
        if(this._db.has(data.id)){
            throw new Error (`User with this ${data.id} ID alredy exist`)
        }
        this._db.set(data.id, data)
        return data.id
   
    }

    public updateUser(updateData:<Omit><User, 'id'> , id:UserID){
        if(!this._db.has(id)) {throw new Error(`not exist`)} 
            this._db.set(id, {...updateData, id})
        return true

    }
}

const myDb = new InMemoryDb()
myDb.updateUser({
   
    fname:'shiv',
    email : 'shiv@HTMLDetailsElement.com',
    contact: {
        mobile: '9999999999',
    },
     address: {
        street : 1,
        pincode : 110098,
        country : 'india',
    }

})

// you can serach for typescript tricks
