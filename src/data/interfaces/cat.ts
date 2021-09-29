import CatsAge from '../enums/catsAge';
import CatsNeeds from '../enums/catsNeeds';
import CatStatus from '../enums/catStatus';

interface ICat {
    id: string;
    name: string;
    color: string;
    age: CatsAge;
    description: string;
    sterile: boolean;
    needs: CatsNeeds[];
    status: CatStatus;
    location?: string;
}

export default ICat;