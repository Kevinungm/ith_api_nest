import { User } from './../../models/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    find(arg0: (user: any) => boolean): User {
        throw new Error('Method not implemented.');
    }
    private readonly Users: User[] = []

    create( user : User ): boolean{
        this.Users.push(user)
        return true
    }

    getAll() : User[]{
        return this.Users
    }

    getByEmail(correo : string) : User{
        return this.Users.find( (user) => user.correo === correo )
    }

    updateUserById(id : number, user : User) : boolean {
        let user_index = this.Users.findIndex( (user) => user.id === id )
        if(this.userExist(id) ){
            //mantener los datos que no se van a actualizar
            //Object assign se usa para actualizar los datos de un objeto
            const new_user = Object.assign(this.Users[user_index], user)
            this.Users[user_index] = new_user
            return true
        }
        return false
    }

    /**
     * @description Esta funcion verifica si un usuario existe o no
     * @param id id del usuario que queremos verificar si existe
     * @returns true si el usuario existe o false si no existe
     */
    userExist(id :number): boolean
    {
        const index = this.Users.findIndex(usuario=>usuario.id)
        return index !== -1    
    }
}