import {NgModule} from "@angular/core";
import { SalvarComponent } from "./cliente-salvar/salvar.component";
import { AddComponent } from './cliente-add/cliente.add.component';

@NgModule({
  declarations: [AddComponent, SalvarComponent],
  exports:[AddComponent, SalvarComponent],
  imports:[]
})
export class ClienteModule{

}
