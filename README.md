# My Portfolio

Welcome to my personal portfolio! This project showcases my skills, experience, and work. Built using **Next.js**, it highlights various web development projects, the technologies I use, and provides ways to get in touch with me.

## Demo

You can view the live demo of the portfolio at:  
[https://your-portfolio-link.com](https://your-portfolio-link.com)

## Features

- **Responsive Design**: The portfolio is mobile-friendly and adapts to different screen sizes.
- **Dark Mode**: Switch between light and dark themes for a personalized experience.
- **Project Showcase**: Displaying various web development projects with descriptions and links to GitHub repositories or live demos.
- **About Me Section**: Learn more about my journey, skills, and experiences.
- **Contact Form**: A simple contact form for visitors to get in touch with me.

## Tech Stack

- **Next.js**: React framework for building fast and scalable web applications.
- **Tailwind CSS**: Utility-first CSS framework for creating modern, responsive designs.
- **React**: JavaScript library for building user interfaces.
- **Vercel**: Platform used for deploying the app.
- **EmailJS**: Service for handling contact form submissions.

## Installation

To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/portfolio.git






Migrating data and tables from SQL Server to ClickHouse involves several steps, including setting up ClickHouse, exporting data from SQL Server, and importing it into ClickHouse. Here’s a general approach for migrating your data:

1. Preparation
Before starting the migration, ensure you have the following:

ClickHouse installed and configured.
SQL Server access credentials (hostname, database name, username, password).
Sufficient disk space for data exports and ClickHouse imports.
2. Install Required Tools
You will need some tools for this process:

ClickHouse Client for connecting to the ClickHouse server and executing SQL queries.
SQL Server Management Studio (SSMS) or any other SQL client for accessing and exporting data from SQL Server.
Python or other scripting tools can be useful for automating the migration if required.
3. Export Data from SQL Server
You need to export the data from SQL Server in a format that ClickHouse can import. Common formats include CSV, TSV, or Parquet.

Using SQL Server Management Studio (SSMS):
Query to Export Data:

Open SSMS and connect to your SQL Server instance.
Use SELECT INTO OUTFILE or export the data using a query.
Alternatively, you can use the Export Wizard in SSMS to export the data into a CSV file.
sql
Copy code
SELECT * 
INTO OUTFILE 'C:\path_to_file\data.csv'
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM your_table_name;
Using bcp (Bulk Copy Program) for Export:
The bcp utility is another way to export SQL Server data to a file.

Example command:

bash
Copy code
bcp your_database.dbo.your_table out data.csv -c -t, -S server_name -U user -P password
4. Create Tables in ClickHouse
In ClickHouse, you need to define tables to match the schema of the data you are importing. Here’s an example of how you can create a ClickHouse table:

sql
Copy code
CREATE TABLE your_table_name
(
    id UInt32,
    name String,
    date DateTime,
    value Float64
) ENGINE = MergeTree()
ORDER BY id;
Ensure that the data types in ClickHouse match the types in SQL Server (e.g., INT in SQL Server becomes UInt32 in ClickHouse, DATETIME becomes DateTime).

5. Import Data into ClickHouse
Once you’ve exported the data from SQL Server, you can import it into ClickHouse.

Option 1: Using ClickHouse Client for CSV
You can use the ClickHouse clickhouse-client to load data from the CSV file.

bash
Copy code
cat data.csv | clickhouse-client --query="INSERT INTO your_table_name FORMAT CSV"
Option 2: Using ClickHouse clickhouse-client with --input_format_csv
If the CSV file is large, you can use the --input_format_csv option:

bash
Copy code
clickhouse-client --query="INSERT INTO your_table_name FORMAT CSV" < data.csv
Option 3: Using Python (ClickHouse-Python Client)
You can also use Python for a more flexible approach, especially if you need to automate or manipulate data before importing it.

Install clickhouse-driver:

bash
Copy code
pip install clickhouse-driver
Python example to insert data:

python
Copy code
from clickhouse_driver import Client

client = Client('your_clickhouse_server')

with open('data.csv', 'r') as f:
    data = [line.strip().split(',') for line in f.readlines()]

client.execute('INSERT INTO your_table_name VALUES', data)
6. Verify Data Integrity
Once the data is imported into ClickHouse, run some queries to verify that the data is correct and that the migration was successful.

sql
Copy code
SELECT COUNT(*) FROM your_table_name;
SELECT * FROM your_table_name LIMIT 10;
7. Optimize the ClickHouse Table
Depending on the size of your data, you may want to optimize the table in ClickHouse:

sql
Copy code
OPTIMIZE TABLE your_table_name FINAL;
This will merge parts and optimize the table for better query performance.

Additional Considerations:
Indexes: ClickHouse uses primary keys and ORDER BY clauses to optimize queries, so ensure that your tables are optimized for the types of queries you expect.
Data types: Pay close attention to data type differences between SQL Server and ClickHouse, and adjust where needed (e.g., DATETIME in SQL Server is DateTime in ClickHouse).
Batch Processing: If you’re dealing with a large dataset, consider batching the import process to avoid memory and timeout issues.
Tools for Migration (Optional)
If you're handling a complex migration, you might want to explore using specialized tools or middleware such as:

ETL Tools (Apache Nifi, Talend, etc.)
ClickHouse Connector for Kafka (if you need to stream data from SQL Server to ClickHouse)
Would you like more details on any specific part of the migration process?



Using a ClickHouse Connector for Kafka allows you to stream data from SQL Server to ClickHouse in near real-time by leveraging Apache Kafka as a middleware. This approach is useful for scenarios where you want to continuously sync data between SQL Server and ClickHouse without performing bulk imports periodically. The process involves integrating these systems to enable real-time or near real-time data replication.

Key Components of the Solution:
SQL Server: The source database where data is stored.
Apache Kafka: A distributed event streaming platform used for high-throughput, low-latency data streaming.
ClickHouse: The target analytical database where data needs to be ingested and stored.
Kafka Connect: A framework to simplify the integration between Kafka and various data sources, including SQL Server and ClickHouse.
Basic Architecture of the Streaming Setup:
SQL Server generates data changes (e.g., new rows, updates, deletes).
SQL Server CDC (Change Data Capture) or SQL Server triggers send changes to Kafka.
Kafka acts as a buffer and streaming layer, handling data streams between SQL Server and ClickHouse.
ClickHouse uses the ClickHouse Kafka connector to read data from Kafka and insert it into the target tables.
Steps to Stream Data from SQL Server to ClickHouse Using Kafka:
1. Set Up Apache Kafka
Apache Kafka serves as the intermediary between SQL Server and ClickHouse. It captures and streams data changes, ensuring that data is available in real-time.

Download and Install Kafka: You can follow the Kafka installation guide here.

Create Topics: In Kafka, you create topics to stream the data.

bash
Copy code
kafka-topics.sh --create --topic sqlserver_to_clickhouse --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
2. Configure SQL Server to Send Data to Kafka
To stream data from SQL Server to Kafka, you typically use Change Data Capture (CDC) or SQL Server Triggers to capture changes and forward them to Kafka.

Option 1: Using Change Data Capture (CDC):
Change Data Capture (CDC) is a SQL Server feature that records insertions, updates, and deletions to tables in the database.

Enable CDC on SQL Server:

sql
Copy code
-- Enable CDC on the database
EXEC sys.sp_cdc_enable_db;

-- Enable CDC on a specific table
EXEC sys.sp_cdc_enable_table 
    @source_schema = 'dbo', 
    @source_name = 'your_table_name', 
    @role_name = NULL;
Capture Data Changes: CDC will now log changes into change tables, which can be consumed by a Kafka producer.

Option 2: Using SQL Server Triggers:
You can create triggers to send new/updated rows to Kafka using a producer client like Kafka’s Kafka Producer API or a Kafka connector.

For example, create a trigger for an insert event:

sql
Copy code
CREATE TRIGGER trg_after_insert 
ON dbo.your_table
AFTER INSERT
AS
BEGIN
   DECLARE @data NVARCHAR(MAX);
   -- Convert inserted row to JSON or another format
   SET @data = (SELECT * FROM INSERTED FOR JSON PATH);
   
   -- Send data to Kafka (This requires a Kafka producer application, written in Java or Python)
   EXEC xp_cmdshell 'kafka-console-producer --broker-list localhost:9092 --topic sqlserver_to_clickhouse';
END;
You could use Kafka's Kafka Connect JDBC Source Connector to directly stream data from SQL Server into Kafka.

3. Set Up Kafka Connect
Kafka Connect is a framework that provides ready-to-use connectors for integrating external systems with Kafka. You can use a JDBC Source Connector to stream data from SQL Server into Kafka.

Install Kafka Connect JDBC Source Connector: Download and install the JDBC Source Connector from Confluent Hub.

Configure the JDBC Source Connector: Create a connector configuration file (e.g., sqlserver-source.properties):

properties
Copy code
name=sqlserver-source
connector.class=io.confluent.connect.jdbc.JdbcSourceConnector
tasks.max=1
topic.prefix=sqlserver_
connection.url=jdbc:sqlserver://<sqlserver_host>:<port>;databaseName=<database_name>;user=<user>;password=<password>
mode=incrementing
incrementing.column.name=id
poll.interval.ms=10000
Start Kafka Connect with JDBC Source:

bash
Copy code
connect-standalone.sh config/connect-standalone.properties config/sqlserver-source.properties
This will stream new rows from SQL Server to a Kafka topic.

4. Set Up ClickHouse Kafka Connector
ClickHouse has built-in support for reading from Kafka. You can configure a ClickHouse table to read data from Kafka and insert it into the appropriate table.

Install ClickHouse Kafka Connector (if not already included): The ClickHouse Kafka engine allows ClickHouse to consume data from Kafka directly. Typically, this is already part of the standard ClickHouse setup, but make sure you have the necessary configuration in place.

Create a Table in ClickHouse with Kafka Engine: Create a table in ClickHouse that will consume messages from the Kafka topic and write them to a destination table.

Example ClickHouse configuration for consuming data from Kafka:

sql
Copy code
CREATE TABLE kafka_source
(
    id UInt32,
    name String,
    value Float64
) ENGINE = Kafka
SETTINGS kafka_broker_list = 'localhost:9092',
         kafka_topic_list = 'sqlserver_to_clickhouse',
         kafka_group_name = 'clickhouse_consumer',
         kafka_format = 'JSONEachRow';
Create a Destination Table for Storing Data: You would typically create a second table for storing the processed data from Kafka.

sql
Copy code
CREATE TABLE final_table
(
    id UInt32,
    name String,
    value Float64
) ENGINE = MergeTree()
ORDER BY id;
Stream Data from Kafka to the Destination Table: You can now stream data from the Kafka topic into ClickHouse using the Materialized View feature.

Example:

sql
Copy code
CREATE MATERIALIZED VIEW mv_kafka_to_clickhouse
TO final_table
AS
SELECT * FROM kafka_source;
This will start consuming data from Kafka and writing it into the final_table in ClickHouse.

5. Monitor and Optimize
Monitor Kafka: Ensure that Kafka is consuming data without any bottlenecks. You can use Kafka's internal monitoring tools to check consumer lag and message throughput.
Monitor ClickHouse: Regularly check ClickHouse's performance and optimize the Kafka engine by managing the number of partitions, replication factors, and any buffer settings.
Advantages of Using Kafka for Streaming:
Real-time Data Sync: Stream data changes in real-time instead of periodic batch imports.
Scalability: Kafka is highly scalable and can handle a large volume of messages without performance degradation.
Reliability: Kafka ensures message delivery and fault tolerance.
Flexibility: Kafka can be integrated with other systems if needed in the future.
Conclusion
Streaming data from SQL Server to ClickHouse using Kafka is a robust and efficient solution, especially for real-time analytics and event-driven architectures. It provides scalability, fault tolerance, and minimizes latency by enabling real-time data migration. If you need more details or help with configuration, feel free to ask!