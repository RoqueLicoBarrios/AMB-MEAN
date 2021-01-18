import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

const componets = [
	MatCardModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatToolbarModule,
	MatIconModule,
	MatTableModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatTabsModule,
	MatDividerModule,
	MatMenuModule,
	MatSnackBarModule
];

@NgModule({
	declarations: [],
	imports: [CommonModule, ...componets],
	exports: [CommonModule, ...componets],
	providers: [MatDialogModule]
})
export class MaterialModule { }
