#include<iostream>
#include<bits/stdc++.h>
using namespace std;

vector<int> squareOfSortedArray(vector<int> &arr)
{
    int left=0, right=arr.size()-1;
    vector<int> ans;

    while (left<=right)
    {
        if((abs(arr[left])) > (abs(arr[right])))
        {
           ans.push_back(arr[left]*arr[left]);
           left++;
        }
        else
        {
          ans.push_back(arr[right]*arr[right]);
          right--;
        }
    }
    
    reverse(ans.begin(), ans.end());
    return ans;
}

int main()
{
    vector<int> v{-8, - 7, -3,-2,-1,3,4,6,7,9};
    vector<int> ans = squareOfSortedArray(v);
    for(int x:ans)
    {
       cout << x << " ";
    }


   return 0;
}