import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormGroup } from '@angular/forms';
import { Id } from '../../../../models/id.interface';

export interface NzImageCustom extends NzImage, Id {}
@Component({
  selector: 'az-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.less'],
  providers: [NzMessageService, NzImageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaComponent implements OnInit {
  /**
   *
   */
  @Input()
  form!: FormGroup;

  /**
   *
   */
  @Input()
  uploadedFiles?: NzImageCustom[];

  /**
   *
   */
  images: Array<File | null> = [];

  /**
   *
   */
  imagesSrc: Array<NzImage> = [];

  /**
   *
   */
  videoId!: string;

  /**
   *
   */
  deletedUploadedFileIds: number[] = [];

  /**
   *
   * @param msg
   * @param nzImageService
   * @param cd
   */
  constructor(
    private msg: NzMessageService,
    private nzImageService: NzImageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.appendYoutubeFrame();
    const videoUrl = this.form.value['video_url'];
    this.splitYoutubeVideoIdFromUrl(videoUrl);
  }

  /**
   *
   */
  private appendYoutubeFrame() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  /**
   *
   * @param image
   */
  viewImage(image: NzImage) {
    this.nzImageService.preview([image], { nzZoom: 1.5, nzRotate: 0 });
  }

  /**
   *
   * @param index
   */
  deleteImage(index: number, image?: NzImageCustom) {
    // REMOVE FROM UPLOADED FILES
    if (image) {
      this.deletedUploadedFileIds.push(image.id);
      this.form.controls['deleted_files'].setValue(this.deletedUploadedFileIds);
      this.uploadedFiles?.splice(index, 1);
      return;
    }

    // REMOVE FROM NOT UPLOADED FILES
    this.images.splice(index, 1);
    this.imagesSrc.splice(index, 1);
  }

  /**
   *
   * @param e
   */
  handleImagesInput(e: NzSafeAny) {
    const image = e.target?.files?.item(0);

    if (image) {
      this.images.push(image);
      this.form.controls['files'].setValue(this.images);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagesSrc.push({ src: reader.result as string });
        this.cd.markForCheck();
      };

      reader.readAsDataURL(image);
    }
  }

  /**
   *
   */
  inputVideChange(e: NzSafeAny) {
    const url: string = e.target.value;
    this.splitYoutubeVideoIdFromUrl(url);
  }

  /**
   *
   * @param url
   */
  private splitYoutubeVideoIdFromUrl(url?: string | null) {
    if (url) {
      // SPLITTING VIDEOID FROM YOUTUBE VIDEO URL
      this.videoId = url.split('?v=')?.[1];
    }
  }
}
