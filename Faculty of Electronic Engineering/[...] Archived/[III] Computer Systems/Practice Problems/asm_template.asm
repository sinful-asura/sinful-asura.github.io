;
; Program explanation section
;

DATA SEGMENT


DATA ENDS
CODE SEGMENT  
    assume CS: CODE, DS: DATA
_START:            
    MOV AX, DATA
    MOV DS, AX
    XOR AX,AX 
    
    ; Program
    
    MOV AH, 4CH
    INT 21H
             
CODE ENDS
END _START

; /------------------------\
;|                          |
;| Additional notes section |
;|                          |
; \------------------------/