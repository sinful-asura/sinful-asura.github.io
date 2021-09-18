; Napisati proceduru na asemblerskom jeziku koja vraca element iza prvog elementa vrednosti 0 u nizu 16-bitnih neoznacenih brojeva.
; Ukoliko u nizu nema nula ili se prva nula nalazi na poslednjem mestu, procedura treba da vrati FFFh.
; Adresa niza i broj elemenata su ulazni parametri procedure. Sve parametre preneti preko steka.

name FIND_FIRST_AFTER_ZERO
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