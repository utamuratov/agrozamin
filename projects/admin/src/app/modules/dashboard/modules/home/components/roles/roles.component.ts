import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { map, Observable } from 'rxjs';
import { Role } from '../../dto/roles/roles.interface';
import { RolesService } from './services/roles.service';

@Component({
  selector: 'az-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.less'],
})
export class RolesComponent implements OnInit {
  /**
   *
   */
  data$!: Observable<Role[]>;

  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  actionList!: NzTreeNodeOptions[];

  /**
   *
   */
  editingData?: Role;

  /**
   *
   * @param fb
   * @param $data
   */
  constructor(private fb: FormBuilder, private $data: RolesService) {}

  /**
   *
   */
  private initForm(): void {
    this.form = this.fb.group({
      key: [null, [Validators.required]],
      actions: [null],
      ru: [null, [Validators.required]],
      uz_cyrl: [null, [Validators.required]],
      uz_latn: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private getAll(): void {
    this.data$ = this.$data.getAll().pipe(
      map((resp) => {
        return resp.data;
      })
    );
  }

  /**
   *
   * @param role
   * @param access
   */
  private setEditDataForm(role?: Role, access?: string[]): void {
    const control = this.form.controls;
    control['key'].setValue(role?.key);
    control['actions'].setValue(access);
    control['ru'].setValue(role?.description.ru);
    control['uz_cyrl'].setValue(role?.description.uz_cyrl);
    control['uz_latn'].setValue(role?.description.uz_latn);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
    this.getAll();
    this.customizeTreeNodeList();
  }

  /**
   *
   * @param role
   */
  showModal(role?: Role): void {
    if (role) {
      const access: string[] = [];
      role.access_controls.forEach((control) => {
        control.access_actions.forEach((action) => {
          access.push(`${control.id}-${action.control_action_id}`);
        });
      });

      this.setEditDataForm(role, access);
    }
    this.editingData = role;
    this.isVisible = true;
  }

  /**
   *
   */
  customizeTreeNodeList(): void {
    this.$data.getList().subscribe((res) => {
      if (res.success) {
        this.actionList = res.data.map((option) => {
          return {
            title: `${option.description}`,
            description: `${option.description}`,
            value: `${option.description}`,
            key: `${option.id}`,
            isLeaf: !option.access.length,
            children: option.access.map((child) => {
              return {
                title: `${option.description} - ${child.description}`,
                description: `${child.description}`,
                isLeaf: true,
                key: `${option.id}-${child.id}`,
                value: `${child.id}`,
              } as NzTreeNodeOptions;
            }),
          } as NzTreeNodeOptions;
        });
      }
    });
  }

  /**
   *
   * @param id
   */
  deleteRole(id: number): void {
    this.$data.delete(id).subscribe((status) => {
      this.afterSuccess(status.success);
    });
  }

  /**
   *
   * @param successfully
   */
  afterSuccess(successfully: boolean): void {
    if (successfully) {
      this.getAll();
    }
  }
}
