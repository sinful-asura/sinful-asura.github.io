using Microsoft.EntityFrameworkCore.Migrations;

namespace April2021.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Meraci",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MaxIzmerena = table.Column<int>(type: "int", nullable: false),
                    MinIzmerena = table.Column<int>(type: "int", nullable: false),
                    DonjaGranica = table.Column<int>(type: "int", nullable: false),
                    GronjaGranica = table.Column<int>(type: "int", nullable: false),
                    Boja = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TrenutnaVrednost = table.Column<int>(type: "int", nullable: false),
                    ZbirIzmerenih = table.Column<int>(type: "int", nullable: false),
                    BrojMerenja = table.Column<int>(type: "int", nullable: false),
                    Podeok = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meraci", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Meraci");
        }
    }
}
