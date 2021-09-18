PODACI SEGMENT


PODACI ENDS
KOD SEGMENT  
    assume CS: KOD, DS: PODACI 
START:            
    MOV AX, PODACI
    MOV DS, AX
    XOR AX,AX 
   
    
    MOV AH, 4CH
    INT 21H
             
KOD ENDS
END START