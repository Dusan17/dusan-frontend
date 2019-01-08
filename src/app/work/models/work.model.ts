import {CategoryModel} from './category.model';

export class WorkModel {
    title: string;
    category: CategoryModel;
    image: string;

    constructor(title: string, category: CategoryModel, image: string) {
        this.category = category;
        this.image = image;
        this.title = title;
    }

    public static getWorks(): WorkModel[] {
        const works = [];
        const animals = new WorkModel('animals', CategoryModel.photography, 'assets/work-images/animals.svg');
        const buttons = new WorkModel('buttons', CategoryModel.applications, 'assets/work-images/buttons.svg');
        const love = new WorkModel('love', CategoryModel.print, 'assets/work-images/love.svg');
        const smile = new WorkModel('smile', CategoryModel.print, 'assets/work-images/smile.svg');
        const socialNetworks = new WorkModel('socialNetworks', CategoryModel.applications, 'assets/work-images/social-networks.svg');
        const jesus = new WorkModel('jesus', CategoryModel.print, 'assets/work-images/jesus.svg');
        const cartoon = new WorkModel('cartoon', CategoryModel.web, 'assets/work-images/cartoon.svg');
        const bang = new WorkModel('bang', CategoryModel.web, 'assets/work-images/bang.svg');
        const sticker = new WorkModel('sticker', CategoryModel.applications, 'assets/work-images/sticker.svg');
        works.push(animals, buttons, love, smile, socialNetworks, jesus, cartoon, bang, sticker);
        return works;
    }
}
