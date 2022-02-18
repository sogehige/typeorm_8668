import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {
    for (let i = 0; i < 2; i++) {
        const user = new User();
        user.name = i;
        getRepository(User).save(user)
    }
}).catch(error => console.log(error));
