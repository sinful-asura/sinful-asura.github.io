; Design an assembly 8086 procedure which finds and returns the immediate neighbour of the first 0-value
; element in a 16bit string of unsigned numbers.
;
; If there are no zeroes in a string, or if the first zero is at the last position in the string, return FFFh.
; String address and number of elements represent the input parameters of the procedure. 
; Parameters should be trasnferred via stack.

name FIND_FIRST_AFTER_ZERO
DATA SEGMENT


DATA ENDS
STACK SEGMENT
    
    
STACK ENDS
CODE SEGMENT  
    assume CS: CODE, DS: DATA, SS: STACK 
_START:            
    MOV AX, DATA
    MOV DS, AX
    XOR AX,AX 
   
    
    MOV AH, 4CH
    INT 21H
             
CODE ENDS
END _START