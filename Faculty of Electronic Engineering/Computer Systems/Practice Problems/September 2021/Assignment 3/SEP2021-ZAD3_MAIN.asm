; Design an assembly 8086 program which, using the FFAZ procedure, organizes rows of a square matrix
; made of 16bit elements according to the value of the zero's immediate neighbour in a current row
; in a non-descending order.  
; Rows without the zero's immediate neighbour should be at the end, in any order.
;
; Provide an an example of input values and expected result for the main program,
; and two specific procedure calls.
; Note: FFAZ - Find First After Zero

DATA SEGMENT


DATA ENDS
STACK SEGMENT
    
    
    
STACK ENDS
CODE SEGMENT  
    assume CS: CODE, DS: DATA, SS: STACK
_START:            
    MOV AX, DATA
    MOV DS, AX
    MOV AX, STACK
    MOV SS, AX
    XOR AX,AX 
   
    
    MOV AH, 4CH
    INT 21H
             
CODE ENDS
END _START