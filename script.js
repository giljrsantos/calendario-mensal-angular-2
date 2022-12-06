// Pega a data corrente do computador
// Obs.: Executei este código no mês
// de abr/2022
const dataAtual = new Date();

const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth();

//
// Em JS os dias da semana começam no domingo
// (dom=0, seg=1, ter=2, ...)
//
const primeiroDiaDaSemana = 0; // domingo
const ultimoDiaDaSemana = 6;   // sábado

//
// Cria a data inicial começando no dia 1.
// Vai subtraindo -1 dia até chegarmos no primeiro
// dia da semana
//
const dataInicial = new Date(ano, mes, 1);
while (dataInicial.getDay() !== primeiroDiaDaSemana) {
  dataInicial.setDate(dataInicial.getDate() - 1);
}

//
// Cria a data final, último dia do mês, para fazer isso
// é só somar +1 no mês e deixar o dia como 0.
//
// Por exemplo: new Date(2022, 1 /* fevereiro */, 0)
// é igual a 31/01/2022
//
// Vai somando +1 até chegarmos no último dia da semana
//
const dataFinal = new Date(ano, mes + 1, 0);
while (dataFinal.getDay() !== ultimoDiaDaSemana) {
  dataFinal.setDate(dataFinal.getDate() + 1);
}

// Vamos preencher o array diasCalendario com um dia em
// cada posição:
const diasCalendario = [];
for (
     let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
  diasCalendario.push(new Date(data.getTime()));
}

console.table(diasCalendario);


//import { Router, ActivatedRoute } from '@angular/router';

// constructor(private titleService: Title,
//   private bgslErrorService: BgslErrorService,
//   private bgslCookiesManagerService: BgslCookiesManagerService,
//   private formBuilder: FormBuilder,
//   private bgslGlobalService: BgslGlobalizacaoService,
//   private monitoracaoService: MonitoracaoService,
//   private modalService: ModalBradesco,
//   private datePipe: DatePipe,
//   private storageService: BgslStorageService,
//   private config: Config,
//   private translate: TranslateService,
//   private router: Router,
//   private route: ActivatedRoute,
//   private location: Location) { }

 
// ngOnInit() {

//   this.aba = Number(this.route.snapshot.queryParamMap.get('aba'))
//   console.log("🚀 ~ ngOnInit ~ this.aba", this.aba)