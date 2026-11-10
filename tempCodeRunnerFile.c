#include <stdio.h>
#include <stdlib.h>
int sei(int n){
    if(n%2){
        return n/2;
    }
    return 3*n+1;
}
int main(){    	
    // Seu código vai aqui
    int n, i;
    scanf("%d", &n);
    while(n == 1){
        n = sei(n);
        i++;
        printf("%d", n);
    }
    printf("%d", i);
    return 0;
}
