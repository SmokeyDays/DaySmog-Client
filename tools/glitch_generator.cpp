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
	puts("欢迎使用glitch动画的 css @keyframes 生成器");
	puts("请输入行高/rem");
	scanf("%lf",&tot);
	puts("请输入间隔，单位为百分比");
	scanf("%d",&gap);
	if(gap>100){
		puts("Error: 间隔过大。");
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

