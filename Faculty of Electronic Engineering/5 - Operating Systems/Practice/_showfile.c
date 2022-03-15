#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_SIZE 255

void main(int argc, char *argv[]){
    char* path = getenv("HOME");
    if(argv[1]){
        path = argv[1];
    } else{
        printf("No filepath specified!\n");
        return;
    }
    char* line;
    FILE* f;
    line = (char*)malloc(sizeof(char) * MAX_LINE_SIZE);
    for(int i=0; i<MAX_LINE_SIZE; i++){
        line[i] = '\0';
    }
    // path = strcat(argv[0], path);
    f = fopen(path, "r");
    if(f==0){
        printf("Lagana greskica\n");
        printf("Putanja: \"%s\" ne postoji!\n", path);
        return;
    }

    int lineNum = 0;
    while(!feof(f)){
        lineNum++;
        char* lineFetched = fgets(line, MAX_LINE_SIZE, f);
        if(lineFetched){
            printf("%d %s", lineNum, line);
        }
    }


    free(line);
    fclose(f);
}