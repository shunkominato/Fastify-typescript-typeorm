import { Repository } from "typeorm";
import { User } from "../../entity/User";

export class UserCreate {
  async userCreate(user: User, userRepository: Repository<User>) {
    console.log("### Create ###");

    await userRepository.insert(user);

    // await userRepository.save({
    //   firstName: "Saki",
    //   lastName: "Suzuki",
    //   age: 40
    // })
  }
}
