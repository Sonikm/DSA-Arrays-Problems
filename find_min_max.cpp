#include<iostream>
using namespace std;

void find_Max_Min(int arr[]){
    int max = INT_MIN, min = INT_MAX;
    int maxi = INT_MIN, mini = INT_MAX;

    for(int i=0; i<10; i++)
    {
        if(max <= arr[i]) {
            max = arr[i];
        }
        if(min >= arr[i]) {
            min = arr[i];
        }

    }

    cout << "max is: " << max << endl;
    cout << "min is: " << min << endl;
}

int main()
{
    int arr[] = {8,4,7,8,2,1,8,3000,79,3};

    find_Max_Min(arr);
   return 0;
}




