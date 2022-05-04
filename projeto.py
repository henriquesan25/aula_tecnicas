from tkinter import N
num = int (input("Digite o numero DECIMAL a ser convertido: "))

print ('\n---------Escolha  a Base para conversao -------------\n')

print ('''Digite [ 1 ] para Converter a base em BINARIO.
Digite [ 2 ] para Converter a base em HEXADECIMAL.
Digite [ 3 ] para Converter a base em OCTADECIMAL.\n ''')

opcao = int(input("Opcao Digitada: "))

if opcao == 1:
    print('\n{} Convertido para BINARIO é: {}'.format(num, bin(num)[2:]))
elif opcao == 2: 
    print('\n{} Convertido para HEXADECIMAL é: {}'.format(num, hex(num)[2:]))
elif opcao == 3:
    print('\n{} Convertido para OCTADECIMAL é: {}'.format(num, oct(num)[2:]))
else:
    print('Opcao invalida. Tente Novamente.\n')

print('\n-------------------Demais opçoes--------------------\n')

if opcao == 1: 
    print('O numero {} em HEXADECIMAL é: {}'.format(num, hex(num)[2:]), 
  '\nE em OCTADECIMAL é: {}'.format(oct(num)[2:])) 
   
if opcao == 2:
     print('O numero {} em BINARIO é: {}'.format(num, bin(num)[2:]),
      '\nE em OCTADECIMAL é: {}'.format(oct(num)[2:]))
     
if opcao == 3:
     print('O numero {} em BINARIO é: {}'.format(num, bin(num)[2:]),
     '\nE em HEXADECIMAL é: {}'.format(hex(num)[2:]))    
else:
    print('\nFIM DA EXECUÇAO')