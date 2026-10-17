#include <stdio.h>
#include <string.h>


int main() {

    char nome[50], repete[10] = "sim";
    char operacao[50];
    float num[2], op;
    printf("Olá, qual seu nome?\n");
    scanf("%49s", nome);
  do{
    printf("Qual operação deseja executar %s? (somar/dividir/subtrair/multiplicar)\n", nome);
    scanf("%s", operacao);
    if (strcmp(operacao, "somar") == 0) {
        printf("Você escolheu Somar. Digite o primeiro valor:\n");
        scanf("%f", &num[0]);
        printf("Agora digite o segundo valor:\n");
        scanf("%f", &num[1]);
        op = num[0] + num[1];
        printf("O valor da soma dos valores é: %.2f \n", op);        

    }
    else if (strcmp(operacao, "dividir") == 0) {
        printf("Você escolheu Dividir, por favor coloque-os na ordem certa. Digite o primeiro valor:\n");
        scanf("%f", &num[0]);
        printf("Agora digite o segundo valor:\n");
        scanf("%f", &num[1]);
        op = num[0] / num[1];
        printf("O valor da divisão é: %.2f \n", op);

    }
    else if (strcmp(operacao, "subtrair") == 0) {
        printf("Você escolheu Subtrair, por favor coloque-os na ordem certa. Digite o primeiro valor:\n");
        scanf("%f", &num[0]);
        printf("Agora digite o segundo valor:\n");
        scanf("%f", &num[1]);
        op = num[0] - num[1];
        printf("O valor da Subtração é: %.2f \n", op);
    }
    else if(strcmp(operacao, "multiplicar") == 0) {
        printf("Você escolheu Multiplicar. Digite o primeiro valor:\n");
        scanf("%f", &num[0]);
        printf("Agora digite o segundo valor:\n");
        scanf("%f", &num[1]);
        op = num[0] * num[1];
        printf("O valor da Multiplicação é: %.2f \n", op);
    }
  else{ 
    printf("Não entendemos a operação.\nPor favor digite novamente.\n");
    continue;
    
  }
    printf("Deseja fazer outra operecao? (sim/nao)\n");
    scanf("%9s", repete);
  } while (strcmp(repete, "sim") == 0);
  
printf("Obrigado por utilizar a calculadora %s \n", nome);
  

    return 0;
}