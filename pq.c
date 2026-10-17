#include <stdio.h>

int main() {

  char nome[50];
  int idade;

  printf("Bem vindo, digite seu nome e sobrenome: \n");
  scanf("%49[^\n]", nome);
  printf("Ola %s, digite sua idade:\n", nome);
  scanf("%d", &idade);
  printf("%s, %d anos\n", nome, idade);

    return 0;
}