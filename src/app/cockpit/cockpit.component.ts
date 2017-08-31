import { Component, OnInit,EventEmitter,Output,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  @Output() serverCreated= new EventEmitter<{ serverName: string , serverContent : string }>();
  @Output() bluePrintCreated=new EventEmitter<{ serverName: string , serverContent : string }>();
  
  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput.nativeElement.value);
    this.serverCreated.emit({serverName:serverNameInput.value , serverContent : this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: serverNameInput.value , serverContent : this.serverContentInput.nativeElement.value});
  }

}
