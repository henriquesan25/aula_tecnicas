num = int (input("Digite o numero DECIMAL a ser convertido: "))

print ('---------Escolha  a Base para conversao -------------')

print ('''Digite [ 1 ] para Converter a base em BINARIO.
Digite [ 2 ] para Converter a base em HEXADECIMAL.
Digite [ 3 ] para Converter a base em OCTADECIMAL. ''')

opcao = int(input("Opcao Digitada: "))
if opcao == 1:
    print('{} Convertido para BINARIO é: {}'.format(num, bin(num)[2:]))
elif opcao == 2: 
    print('{} Convertido para HEXADECIMAL é: {}'.format(num, hex(num)[2:]))
elif opcao == 3:
    print('{} Convertido para OCTADECIMAL é {}'.format(num, oct(num)[2:]))
else:
    print('Opcao invalida. Tente Novamente.')

print('Demais opçoes: ')
if opcao == 1: 
    print('o numero {} em HEXADECIMAL é: {}'.format(num, hex(num)[2:]), )
elif opcao == 1: 
    print('E em OCTADECIMAL é: {}'.format(num, oct(num)[2:]))

if opcao == 2:
     print('o numero {} em BINARIO é: {}'.format(num, bin(num)[2:]))
elif opcao == 2:
     print('E em OCTADECIMAL é: {}'.format(num, oct(num)[2:]))

if opcao == 3:
     print('o numero {} em BINARIO é: {}'.format(num, bin(num)[2:]))
if opcao == 3:
     print('E em HEXADECIMAL é: {}'.format(num, hex(num)[2:]))

else:
    print('FIM DA EXECUÇAO')