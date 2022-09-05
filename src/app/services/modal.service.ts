import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  unregister(id: string) {
    this.modals = this.modals.filter((elm) => elm.id !== id);
  }

  isModalOpen(id: string) {
    return !!this.modals.find((elm) => elm.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((elm) => elm.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
    //this.visible = !this.visible;
  }

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }
}
