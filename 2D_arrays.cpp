#include<iostream>
using namespace std;

int main()
{
    int n,m;

    cout << "enter the row and column: ";
    cin >> n >> m;

    int array[n][m];  // n-> row, m-> column

    for (int i = 0; i < n; i++)
    {
        cout << "enter the elements of row" << i << endl;
        for (int j = 0; j < m; j++)
        {
           cin >> array[i][j]; 
        }
    }


   cout << "2D Arrays elements" << endl;    

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < m; j++)
        {
        cout << array[i][j] << " ";
        }
        cout << endl;
    }

   return 0;
}