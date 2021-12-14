import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverStatus: string = 'Online';
  @Input() serverName: string = 'Unknown';

  constructor() {}

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }
}
