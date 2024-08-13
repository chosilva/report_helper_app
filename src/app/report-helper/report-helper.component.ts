import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-helper',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './report-helper.component.html',
  styleUrls: ['./report-helper.component.css'],
})
export class ReportHelperComponent {
  eta1V: number = 0;
  eta2V: number = 0;
  eta3V: number = 0;
  cisterna: number = 0;
  turbidezAguaTratada: number = 0;
  cloroResidualAguaTratada: number = 0;
  turbidezAguaBruta: number = 0;
  phAguaBruta: number = 0;

  resultEta1: number = 0;
  resultEta2: number = 0;
  resultEta3: number = 0;
  resultTotalcaptado: number = 0;
  resultCisterna: number = 0;
  resultTurbAguaTratada: number = 0;
  resultTurbAguaBruta: number = 0;
  resultCloroResidual: number = 0;
  resultPhAguaBruta: number = 0;

  constructor(private clipboard: Clipboard) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.resultEta1 = this.eta1V || 0;
    this.resultEta2 = this.eta2V || 0;
    this.resultEta3 = this.eta3V || 0;
    this.resultTotalcaptado =
      (this.eta1V || 0) + (this.eta2V || 0) + (this.eta3V || 0);
    this.resultCisterna = this.cisterna || 0;
    this.resultTurbAguaTratada = this.turbidezAguaTratada || 0;
    this.resultCloroResidual = this.cloroResidualAguaTratada || 0;
    this.resultTurbAguaBruta = this.turbidezAguaBruta || 0;
    this.resultPhAguaBruta = this.phAguaBruta || 0;

    const resultFinal = `> Status ETA

ETA 1: *${this.resultEta1}m³*
ETA 2: *${this.resultEta2}m³*
ETA 3: *${this.resultEta3}m³*
Total Captado: *${this.resultTotalcaptado}m³*

Reservatório elevado: *900m³*
Cisterna: *${this.resultCisterna}m³*

Turbidez água tratada: *${this.resultTurbAguaTratada}NTU*
Cloro residual água tratada: *${this.resultCloroResidual}*

Turbidez água bruta: *${this.resultTurbAguaBruta}NTU*
pH água bruta: *${this.resultPhAguaBruta}*`;

    this.clipboard.copy(resultFinal);
    alert('Copiado com sucesso!');
  }
}
