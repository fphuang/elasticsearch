1. Start Elastic search docker:
    docker run -p 127.0.0.1:9200:9200 \
    -p 127.0.0.1:9300:9300 \
    -e "discovery.type=single-node" \ 
    docker.elastic.co/elasticsearch/elasticsearch:7.15.2

2. run the following command to build index
    node data.js

3. run the following command to start the Web server
    npm start

4. open localhost:3006 to search
