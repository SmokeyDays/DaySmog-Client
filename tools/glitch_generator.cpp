#include<iostream>
#include<cstdio>
#include<cstring>
#include<algorithm>
#include<queue>
#include<vector>
#include<cstdlib>
#include<ctime>
using namespace std;

double randIn(double A,double B){
	double Rnd = rand()%1000;
	return (Rnd/1000)*(B-A)+A;
}

double tot;

inline void prnt(int ID){
	double L,R;
	L=randIn(0,tot);R=randIn(L,tot);
//	if(L>R){swap(L,R);}
	printf("    %d\% {clip: rect(%.3lfrem, 9999px, %.3lfrem, 0);}\n",ID,L,R);
}

inline void init(){
	srand(time(0));
	
	int gap;
	puts("��ӭʹ��glitch������ css @keyframes ������");
	puts("�������и�/rem");
	scanf("%lf",&tot);
	puts("������������λΪ�ٷֱ�");
	scanf("%d",&gap);
	if(gap>100){
		puts("Error: �������");
		return;
	}
	
	for(int i=0;i*gap<100;++i){
		prnt(i*gap);
		
	}
	prnt(100);
}

int main(){
	init();
	return 0;
}

