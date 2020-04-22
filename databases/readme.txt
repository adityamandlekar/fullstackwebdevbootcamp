Refer:MongoDB Instructions
    https://github.com/nax3t/aws-cloud9-instructions/blob/master/README.md
    
    
mkdir data
cd data
echo 'mongod --bind_IP=$IP --dbpath=data --nojournal --rest "$@"'> mongod
./mongod

