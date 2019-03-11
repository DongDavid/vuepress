# mac下php添加扩展

## 加扩展

[参考链接](https://blog.csdn.net/worldzhy/article/details/51249195)

curl -O http://us.php.net/distributions/php-7.1.16.tar.gz
tar -xzvf php-7.1.16.tar.gz
cd php-7.1.16/ext/pcntl
phpize
./configure
make
make test

查看扩展路径
php -i | grep extension_dir 

#这里会没有权限
cp pcntl.so /usr/lib/php/extensions/no-debug-non-zts-20160303/pcntl.so

修改/etc/php.ini，加一行 extension=pcntl.so

所以放到其他路径去
extension=/Users/daviddong/workSpace/php/php-7.1.16/ext/pcntl/modules/pcntl.so

## 编译新版本

[参考链接](https://cuiqingcai.com/3992.html)
curl -O http://us.php.net/distributions/php-7.2.7.tar.gz

cd php-7.2.7
./buildconf --force
./configure --prefix=/usr/local/php7 --enable-fpm --with-fpm-user=www --with-fpm-group=www --with-mysqli --with-pdo-mysql --with-iconv-dir --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib  --disable-rpath --enable-bcmath --enable-shmop --enable-sysvsem --enable-inline-optimization --with-curl --enable-mbregex --enable-mbstring --with-mcrypt --enable-ftp --with-gd --enable-gd-native-ttf --with-openssl=/usr/local/Cellar/openssl/1.0.2o_2/ --with-mhash --enable-pcntl --enable-sockets --with-xmlrpc --enable-zip --enable-soap --without-pear --with-gettext --disable-fileinfo --enable-maintainer-zts


ssl失败 configure: error: Cannot find OpenSSL's <evp.h>
brew install openssl
./configure  --with-openssl=/usr/local/Cellar/openssl/1.0.2o_2/


configure: error: jpeglib.h not found.  mac
brew install libjpge
brew install libpng

configure: error: freetype-config not found.
