; Napisati program na asemblerskom jezik ukoji, koriscenjem napisane procedure, uredjuje vrste kvadratne matrice
; 16-bitnih elemenata prema vrednosti sledbenika prvog nultog elementa u vrsti, u neopadajuci redosled.
; Vrste koje nemaju sledbenika nultog elementa treba da se nadju na kraju, u bilo kom redosledu.
; Dati primer ulaznih podataka i ocekivanu vrednost rezultata, za glavni program i dva karakteristicna poziva procedure

PODACI SEGMENT


PODACI ENDS
STACK SEGMENT
    
    
    
STACK ENDS
KOD SEGMENT  
    assume CS: KOD, DS: PODACI, SS: STACK 
START:            
    MOV AX, PODACI
    MOV DS, AX
    XOR AX,AX 
   
    
    MOV AH, 4CH
    INT 21H
             
KOD ENDS
END START