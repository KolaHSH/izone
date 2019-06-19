from flask_restful import Resource
from utils.common import *
from pictures.models import Picture, Category
from admins import db
from flask import make_response, render_template

from qiniu import Auth, put_data
# 需要填写你的 Access Key 和 Secret Key
access_key = QINIU_AK
secret_key = QINIU_SK
# 构建鉴权对象
q = Auth(access_key, secret_key)
# 要上传的空间
bucket_name = QINIU_BUCKET
domain_prefix = QINIU_DOMAIN


class Upload(Resource):
    """上传图片"""
    def get(self):
        cate = Category.query.all()
        result = []
        for i in cate:
            obj = {
                "id": i.id,
                "title": i.title
            }
            result.append(obj)
        return make_response(render_template("upload.html", category=result))

    @catch_exception
    def post(self):
        up = UpFile()
        data = request.values
        f = request.files["image"]
        filename = secure_filename(f.filename)
        mime = filename.rsplit(".")[1]
        with open(f, "rb") as file:
            qiniu_url = up.upload_img(file, mime)

        # if qiniu_url:
        #     pic = Picture(
        #         image_url=qiniu_url,
        #         desc=data["desc"],
        #         category=Category.query.filter_by(id=int(data["category"])).first()
        #     )
        #     db.session.add(pic)
        #     db.session.commit()
        #     return trueReturn(qiniu_url)
        # else:
        #     return falseReturn("上传失败")


class GetAllImage(Resource):
    """获取图片"""
    @catch_exception
    def get(self):
        pic = Picture.query.all()
        result = []
        if pic:
            for i in pic:
                obj = {
                    "id": i.id,
                    "image_url": i.image_url,
                    "desc": i.desc,
                    "category": i.category.id
                }
                result.append(obj)
        return trueReturn(result)


class GetAllCategory(Resource):
    """获取所有分类"""
    @catch_exception
    def get(self):
        cate = Category.query.all()
        result = []
        for i in cate:
            obj = {
                "id": i.id,
                "title": i.title
            }
            result.append(obj)
        return trueReturn(result)


class GetPic(Resource):
    @catch_exception
    def post(self):
        id = request.values["id"]
        c = Category.query.filter_by(id=int(id)).first()
        pic = Picture.query.filter_by(category=c).all()
        result = []
        for i in pic:
            obj = {
                "id": i.id,
                "image_url": i.image_url,
                "desc": i.desc,
                "category": i.category.id
            }
            result.append(obj)
        return trueReturn(result)


def qiniu_upload_file(source_file, save_file_name):
    # 生成上传 Token，可以指定过期时间等
    token = q.upload_token(bucket_name, save_file_name)

    ret, info = put_data(token, save_file_name, source_file.stream)

    print(type(info.status_code), info)
    if info.status_code == 200:
        return domain_prefix + save_file_name
    return None