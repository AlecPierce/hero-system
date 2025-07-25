import { Component, Inject, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../classes/hero';

import { StatsComponent } from '../components/stats.component';
import { HeroDialogAction } from '../enums/dialogActions.enum';
import { HeroDialogEvent } from '../events/heroDialogEvent';
@Component({
    selector: 'app-dialog-menu',
    templateUrl: './dialog-menu.component.html',
    imports: [StatsComponent, MatExpansionModule],
    styleUrls: ['./dialog-menu.component.scss']
})
export class DialogMenuComponent {
    readonly panelOpenState = signal(false);

      constructor(
        public dialogRef: MatDialogRef<DialogMenuComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Hero
      ) {}

      public alreadyInParty = this.data?.isInParty ? true : false;
      public hero = this.data;

      addClicked(): void {
        this.onAction(HeroDialogAction.Add);
      }

      removeClicked(): void {
        this.onAction(HeroDialogAction.Remove);
      }
    
      onAction(action: HeroDialogAction): void {
        if (action === HeroDialogAction.Add) {
          this.data.isInParty = true;
        } else if (action === HeroDialogAction.Remove) {
          this.data.isInParty = false;
        }
        this.dialogRef.close(new HeroDialogEvent(action, this.data));
      }
    
      closeDialog(): void {
        this.dialogRef.close();
      }
}