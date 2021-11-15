; Design an assembly 8086 procedure which finds and returns the immediate neighbour of the first 0-value
; element in a 16bit string of unsigned numbers.
;
; If there are no zeroes in a string, or if the first zero is at the last position in the string, return FFFh.
; String address and number of elements represent the input parameters of the procedure. 
; Parameters should be trasnferred via stack.
; ------------------------------------------------------------------------------------------------------------
; Design an assembly 8086 program which, using the FFAZ procedure, organizes rows of a square matrix
; made of 16bit elements according to the value of the zero's immediate neighbour in a current row
; in a non-descending order.  
; Rows without the zero's immediate neighbour should be at the end, in any order.
;
; Provide an an example of input values and expected result for the main program,
; and two specific procedure calls.
; Note: FFAZ - Find First After Zero

DATA SEGMENT
     MATRICA DW 1, 2, 3, 4, 5, 6, 7 ,8, 9
     N DW 3
DATA ENDS
STACK SEGMENT
     dw 200 dup(?)
     DNO LABEL WORD  
STACK ENDS
CODE SEGMENT
    assume CS: CODE, DS: DATA, SS: STACK
    
_START:            
    MOV AX, DATA
    MOV DS, AX
    MOV AX, STACK
    MOV SS, AX
    LEA SP, DNO
    XOR AX, AX

    
    
    
    
    PUSH N
    LEA AX, [MATRICA + 6]
    PUSH AX
    CALL FFAZ
    
    MOV AH, 4CH
    INT 21H
    
    
    
    
; This emulator can't link external files REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE 
FFAZ PROC
   ; 1 - Saving Processor Context
   PUSH BP
   MOV BP, SP
   PUSHF
   
   
   ; 2 - Input Parameters
   
   MOV BX, [BP+8] ; Element count
   MOV SI, [BP+6] ; Current row address
   
   ; 3 - Procedure Body
   
   
   ; 4 - Output Parameters
   
   
   ; 5 - Restoring Processor Context
   POPF
   POP BP
   
   ; 6 - Return To The CALL Address
   RET      
FFAZ ENDP




CODE ENDS
END _START


