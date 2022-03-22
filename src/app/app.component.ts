import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'just a test!'}];
  userCredentials = [{type: 'user', username: 'username', password: 'password' }];
  onServerAdded( serverData: {serverName: string, serverContent: string }) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string }) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }
  onUserAdded(userData: {newUserName: string, newPassword: string}) {
    this.userCredentials.push({
      type: 'user',
      username: userData.newUserName,
      password: userData.newPassword
    });
  }
}
