#include<iostream>
#include<vector>
using namespace std;

int main()
{
    int n = 40;
    int cnt = 0;
    vector<bool> prime(n+1, true);

    prime[0] = prime[1] = false;

    for(int i=2; i<n; i++){
      if(prime[i])
      {
        cnt++;
        cout << i << " ";
        for(int j=i*2; j<n; j = j+i)
        {
           prime[j] = 0;

        }
      }
    }
    cout << endl << cnt << endl;

    

   return 0;
}