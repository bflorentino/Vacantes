# Generated by Django 4.1.2 on 2022-10-13 20:16

from django.db import migrations, models
import vacantes.functions


class Migration(migrations.Migration):

    dependencies = [
        ('vacantes', '0015_remove_solicitude_cv_solicitude_cv_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='empresa',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to=vacantes.functions.image_upload_location),
        ),
    ]