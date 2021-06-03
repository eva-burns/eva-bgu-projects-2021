# Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph.
#
# The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) 
# in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.).
# Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They
# will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.
# 
# An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path 
# from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. 
# Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. 
# The output for this array should be A-E-D-F-G.
# 
# There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. 
# The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.

def shortest_path(str_in):
  nodes = str_in[1:int(str_in[0]) + 1]
  connect_arr = str_in[int(str_in[0]) + 1: len(str_in)]
  connections = {n: [] for n in nodes}
  for i in range(len(connect_arr)):
    temp = connect_arr[i].split("-")
    connections[temp[0]].append(temp[1])
    connections[temp[1]].append(temp[0])
  shortest = {n: {'weight':1000, 'path':''} for n in nodes}
  shortest[nodes[0]] = {'weight':0, 'path':nodes[0]}
  return shortest_path_helper(nodes[0], nodes[int(str_in[0]) - 1], shortest, connections)

def shortest_path_helper(start, end, shortest, connections):
  while end in shortest.keys() and len(shortest) > 0:
    [path, shortest] = iter(shortest, connections)
    print(shortest)
  if path == "":
    path = -1
  return path

def iter(shortest, connections):
  min_node = min(shortest, key=lambda k: shortest[k]['weight'])
  for elem in connections[min_node]:
    if elem in shortest.keys():
      if shortest[min_node]['weight'] + 1 < shortest[elem]['weight']:
        shortest[elem]['weight'] = shortest[min_node]['weight'] + 1
        shortest[elem]['path'] = shortest[min_node]['path'] + "-" + elem
  path = shortest[min_node]['path']
  shortest.pop(min_node)
  return [path, shortest]
