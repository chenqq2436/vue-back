# 继承自node
FROM node
# 添加名称
LABEL name='vue-back'
# 添加版本号
LABEL version='1.0'
# 拷贝当前目录到/app目录
COPY . /app
# 指定工作目录
WORKDIR /app
# 安装依赖
RUN npm install
# 向外暴露3000端口
EXPOSE 3000
# 启动项目
CMD npm start
