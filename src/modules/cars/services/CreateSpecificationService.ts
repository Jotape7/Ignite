import { ISpecificationsRepository } from "../repositories/ISpecificationRepository"

interface IRequest {
    name: string;
    description;

}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository ) {

    }
    execute({ name, description }: IRequest): void {
        this.specificationsRepository.create({
            name,
            description,
        })
    }

}

export {CreateSpecificationService}