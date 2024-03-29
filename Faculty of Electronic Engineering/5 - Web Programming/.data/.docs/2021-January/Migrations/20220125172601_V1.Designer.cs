﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace Jan2021.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20220125172601_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Models.Grad", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("X")
                        .HasColumnType("float");

                    b.Property<double>("Y")
                        .HasColumnType("float");

                    b.HasKey("ID");

                    b.ToTable("Gradovi");
                });

            modelBuilder.Entity("Models.MeteoroloskiPodatak", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int>("BrSDana")
                        .HasColumnType("int");

                    b.Property<int?>("GradID")
                        .HasColumnType("int");

                    b.Property<int>("KolicinaPadavina")
                        .HasColumnType("int");

                    b.Property<int>("Mesec")
                        .HasColumnType("int");

                    b.Property<int>("PTemperatura")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("GradID");

                    b.ToTable("Podaci");
                });

            modelBuilder.Entity("Models.MeteoroloskiPodatak", b =>
                {
                    b.HasOne("Models.Grad", "Grad")
                        .WithMany("Podaci")
                        .HasForeignKey("GradID");

                    b.Navigation("Grad");
                });

            modelBuilder.Entity("Models.Grad", b =>
                {
                    b.Navigation("Podaci");
                });
#pragma warning restore 612, 618
        }
    }
}
