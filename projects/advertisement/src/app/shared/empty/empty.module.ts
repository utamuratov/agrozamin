import { NgModule } from '@angular/core';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { EmptyComponent } from './empty.component';


@NgModule({
    imports: [NzEmptyModule],
    exports: [EmptyComponent],
    declarations: [EmptyComponent],
    providers: [],
})
export class EmptyModule { }
