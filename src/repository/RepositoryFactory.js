
import animakerRepository from "./animakerRepository";
const repositories = {
   
    animaker: animakerRepository,
};
export const RepositoryFactory = {
    get: (name) => repositories[name], 
};
