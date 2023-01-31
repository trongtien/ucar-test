import { Component, OnInit } from '@angular/core';
import { ResizeService } from '@app/core/services';

@Component({
  selector: 'app-toggle-layout',
  templateUrl: './toggle-layout.component.html',
  styleUrls: ['./toggle-layout.component.scss']
})
export class ToggleLayoutComponent implements OnInit {

  public isViewIcon = false

  constructor(
    private resizeService: ResizeService
  ) { }

  ngOnInit(): void {
    this.isViewIcon = this.resizeService.isViewResponsive
  }
}
