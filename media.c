#include <stdio.h>

int main () {

  float nt[3], m;
  printf("Digite a primeira nota: ");
  scanf("%f", &nt[0]);
  printf("Digite a segunda nota: ");
  scanf("%f", &nt[1]);
  printf("Digite a terceira nota: ");
  scanf("%f", &nt[2]);
  m = (nt[0] + nt[1] + nt[2]) / 3;
  printf("Sua media e: %.1f \n", m);
  if (m >= 6.5) {
    printf("Voce esta aprovado, parabens.\n");
  }
  else if (m >= 5.5) {
    printf("Voce nao atingiu a nota necessaria marque um exame adicional.\n");
  }
  else {
    printf("Voce foi Reprovado.\n");
  }
  return 0;
}