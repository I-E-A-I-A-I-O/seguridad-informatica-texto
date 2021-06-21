#include "reader.h"
#include <iostream>
#include <filesystem>
#include <Poco/StreamCopier.h>
#include "Poco/StreamCopier.h"
#include "Poco/FileStream.h"
#include "Poco/Net/HTTPRequest.h"
#include "Poco/Net/HTTPClientSession.h"
#include "Poco/Net/HTTPResponse.h"
#include <Windows.h>
#include <filesystem>
#include <sstream>
#include <fstream>
#include "Poco/URI.h"
namespace fs = std::filesystem;

void readFiles() {
	try {
		Poco::URI uri("https://");
		std::string path(uri.getPathAndQuery());
		Poco::Net::HTTPClientSession session(uri.getHost(), uri.getPort());
		session.setKeepAlive(true);
		for (auto& p : fs::directory_iterator("test")) {
			Poco::Net::HTTPRequest request(Poco::Net::HTTPRequest::HTTP_POST, path, Poco::Net::HTTPMessage::HTTP_1_1);
			request.setContentType("multipart/form-data; boundary=-------------------------87142694621188");
			std::string boundary = "-------------------------87142694621188";
			std::string data1("-------------------------87142694621188\r\nContent-Disposition: form-data; name=\"data\"; filename=\"");
			std::string data2(p.path().filename().string());
			std::string data3("\";\r\nContent-Type: application/octet-stream\r\n\r\n");
			std::string data4("\r\n---------------------------87142694621188--\r\n");
			std::ifstream file(p.path(), std::ios::binary);
			std::ostringstream ostrm;
			ostrm << file.rdbuf();
			std::string reqBody;
			reqBody.append(data1);
			reqBody.append(data2);
			reqBody.append(data3);
			reqBody.append(ostrm.str());
			reqBody.append(data4);
			request.setContentLength(reqBody.length());
			request.setKeepAlive(true);
			std::ostream& myOStream = session.sendRequest(request);
			myOStream << reqBody;
			Poco::Net::HTTPResponse res;
			std::istream& rs = session.receiveResponse(res);
			int statusCode = (int)res.getStatus();
			std::string status = res.getReason();
			std::string response;
			while (rs) {
				response.push_back(char(rs.get()));
			}
			std::cout << "\nStatusCode: " << statusCode << "\nStatus: " << status << "\nResponse: " << response;
		}
	}
	catch (Poco::Exception& exception) {
		std::cout << "\nException ocurred while uploading: " << exception.displayText();
	}
}
